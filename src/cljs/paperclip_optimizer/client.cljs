(ns paperclip-optimizer
  (:require [clojure.string :as string]))

;; These things exist:

(declare handle-plier-click handle-wire-extruder-click
		 handle-automatic-salesmachine-click handle-mechanical-hand-click
		 handle-streamlining-click
		 automatic-sale automatic-production)

;; Utilities:

(defn exp [a b]
  (defn exp-internal [a b acc]
    (if (<= b 0)
        acc
        (recur a (dec b) (* a acc))))
  (exp-internal a b 1))

(defn inc-number [a]
  (assoc a :number (inc (:number a))))

(defn remove-stock [a]
  (assoc a :in-stock (dec (:in-stock a))))

(defn set-html! [element help-text & args]
  (set! (.-innerHTML element)
        (string/join `("<abbr title=\"" ~help-text "\">" ~@args
		     "</abbr>"))))

(defn make-shown [a]
  (assoc a :shown true))

(defn current-price [a]
  (/ (:price a) (:in-stock a)))

(defn increase-stock [a]
  (assoc a :in-stock (min (inc (:in-stock a)) 100)))

;; State Tracking:

(def paperclips-sold (atom 1))
(def monies (atom 10))

(def paperclips (atom 0))
(def pliers (atom {:number 0 :shown false :price 1000 :in-stock 100}))
(def wire-extruders (atom {:number 0 :shown false :price 5000 :in-stock 100}))
(def automatic-salesmachines (atom {:number 0 :shown false :price 50000 :in-stock 100}))
(def mechanical-hands (atom {:number 0 :shown false :price 100000 :in-stock 100}))
(def streamlinings (atom {:number 0 :shown false :price 50000 :in-stock 10}))

;; Help texts:

(def money-help "Sell paperclips for money: The more paperclips you sell, the less you will be able to get for them. The price goes up as people break paperclips.")
(def paperclip-help "Clicking here uses manual labor to create paperclips. Buying tools can help increase the efficiency of your production. It costs a tiny amount to buy metal for each paperclip.")
(def plier-help "Pliers help you bend wires more quickly.")
(def wire-extruder-help "Every wire extruder you buy increases the number of paperclips you get per click by five.")
(def automatic-salesmachine-help "Sells 1 paperclip per second.")
(def mechanical-hand-help "Makes paperclips, but only very slowly.")
(def streamlining-help "By carefully organizing your paperclip production process, you can boost the number of paperclips you produce by 5%")

;; Elements:

(def money (.getElementById js/document "money"))
(def clickable (.getElementById js/document "clickable"))
(def plier (.getElementById js/document "plier"))
(def wire-extruder (.getElementById js/document "wire-extruder"))
(def automatic-salesmachine (.getElementById js/document "automatic-salesmachine"))
(def mechanical-hand (.getElementById js/document "mechanical-hand"))
(def streamlining (.getElementById js/document "streamlining"))

;; Views:
; Meta:
(defn show? [record element handler]
  (if (false? (:shown @record))
    (do (.addEventListener element "click" handler)
        (swap! record make-shown))))

(defn show-price [record]
  (if (>= (:in-stock @record) 1)
      (/ (Math/ceil (* 100 (current-price @record))) 100)
      "out-of-stock: infinite"))

; Real:
(defn money-view []
  (set-html! money money-help
	     "Click to sell paperclips!</br>Total: "
	     (/ (Math/floor (* 100 @monies)) 100)
	     "$</br>(Paperclips in Circulation: " (Math/floor @paperclips-sold) ")</br>"
	     "(Paperclips go for: $" 
	     (/ (Math/floor (/ 2000 (inc @paperclips-sold))) 100) ")"))

(defn paperclip-view []
  (set-html! clickable paperclip-help 
	     "You have " (Math/floor @paperclips) " paperclips!	[?]"))

(defn plier-view []
  (show? pliers plier handle-plier-click)
  (set-html! plier plier-help "Pliers: " (:number @pliers) " (Cost: $" 
	(show-price pliers) ")	[?]"))

(defn wire-extruder-view []
  (show? wire-extruders wire-extruder handle-wire-extruder-click)
  (set-html! wire-extruder wire-extruder-help "Wire Extruders: " 
	     (:number @wire-extruders) " (Cost: $" 
	     (show-price wire-extruders) ")	[?]"))

(defn automatic-salesmachine-view []
  (show? automatic-salesmachines automatic-salesmachine 
  		 handle-automatic-salesmachine-click)
  (set-html! automatic-salesmachine automatic-salesmachine-help 
  		 "Automatic Salesmachines: "
	     (:number @automatic-salesmachines) " (Cost: $"
	     (show-price automatic-salesmachines) ")	[?]"))

(defn mechanical-hand-view []
  (show? mechanical-hands mechanical-hand handle-mechanical-hand-click)
  (set-html! mechanical-hand mechanical-hand-help "Mechanical Hands: "
         (:number @mechanical-hands) " (Cost: $"
         (show-price mechanical-hands) ")	[?]"))

(defn streamlining-view []
  (show? streamlinings streamlining handle-streamlining-click)
  (set-html! streamlining streamlining-help "Process Improvements: "
  		 (:number @streamlinings) " (Cost: $"
  		 (show-price streamlinings) ") [?]"))

;; Event Handling:
; Meta
(defn buy-okay? [record]
  (and
	(>= (:in-stock @record) 1)
	(>= @monies (current-price @record))))

(defn buy [record]
  (do (swap! monies - (current-price @record))
      (swap! record inc-number)
      (swap! record remove-stock)))

(defn price-show [record view]
  (if (>= @monies (current-price @record))
    (view)))

; Main

(defn handle-money-click []
  (if (>= @paperclips 1)
    (do
      (swap! monies + (/ 20 (inc @paperclips-sold)))
      (swap! paperclips dec)
      (swap! paperclips-sold inc)
      (price-show pliers plier-view)
      (price-show wire-extruders wire-extruder-view)
      (price-show automatic-salesmachines automatic-salesmachine-view)
      (price-show mechanical-hands mechanical-hand-view)
      (price-show streamlinings streamlining-view)
      (money-view)
      (paperclip-view))))

(defn handle-paperclip-click []
  (if (>= @monies 0.001)
    (do (swap! paperclips + (* (exp 1.05 (:number @streamlinings)) 
                         (+ 1 
                            (:number @pliers) 
                            (* 5 (:number @wire-extruders)))))
        (swap! monies - 0.001)))
  (paperclip-view))

(defn handle-plier-click []
  (if (buy-okay? pliers)
    (do (buy pliers)
	    (plier-view)
	    (money-view))))

(defn handle-wire-extruder-click []
  (if (buy-okay? wire-extruders)
    (do (buy wire-extruders)
        (wire-extruder-view)
        (money-view))))

(defn handle-automatic-salesmachine-click []
  (if (buy-okay? automatic-salesmachines)
    (do (buy automatic-salesmachines)
        (automatic-salesmachine-view)
        (money-view)
        (.setInterval js/window automatic-sale 1000))))

(defn handle-mechanical-hand-click []
  (if (buy-okay? mechanical-hands)
    (do (buy mechanical-hands)
        (mechanical-hand-view)
        (money-view)
        (.setInterval js/window automatic-production 10000))))

(defn handle-streamlining-click []
  (if (buy-okay? streamlinings)
    (do (buy streamlinings)
        (streamlining-view)
        (money-view))))

;; Time Updates:

(defn paperclip-loss []
  (swap! paperclips-sold (fn [x] (if (> x 1) (/ x 1.05) 1)))
  (money-view))

(def restockables '(pliers wire-extruders 
					automatic-salesmachines mechanical-hands))

(def restock-views '(plier-view wire-extruder-view
					 automatic-salesmachine-view mechanical-hand-view))

(defn restock []
  (for [x restockables]
    (swap! x increase-stock))
  (for [x restock-views]
    (x)))

(defn automatic-sale []
  (handle-money-click))

(defn automatic-production []
  (handle-paperclip-click))

;; The Beginning:

(.addEventListener clickable "click" handle-paperclip-click)
(.addEventListener money "click" handle-money-click)


(.setInterval js/window paperclip-loss 1000)
(.setInterval js/window restock 10001)
