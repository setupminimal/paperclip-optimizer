(ns paperclip-optimizer
  (:require [clojure.string :as string]))

;; Utilities:

(defn third [c]
  (nth c 2))

(defn inc-number [a]
  (assoc a :number (inc (:number a))))

(defn double-price [a]
  (assoc a :price (* 2 (:price a))))

(defn set-html! [element & args]
  (set! (.-innerHTML element)
        (string/join args)))

;; State Tracking:

(def paperclips (atom 0))
(def wire-extruders (atom {:number 0 :shown false :price 10}))

;; Elements:

(def clickable (.getElementById js/document "clickable"))
(def wire-extruder (.getElementById js/document "wire-extruder"))

;; Views:

(defn paperclip-view []
  (set-html! clickable "You have " @paperclips " paperclips!"))

(defn wire-extruder-view []
  (if (false? (:shown @wire-extruders))
      (.addEventListener wire-extruder "click" handle-wire-extruder-click))
  (set-html! wire-extruder "Wire Extruders: " (:number @wire-extruders)
             " (Cost: " (:price @wire-extruders) ")"))

;; Event Handling:

(defn handle-paperclip-click []
  (swap! paperclips + (:number @wire-extruders) 1)
  (if (= @paperclips 10)
    (wire-extruder-view))
  (paperclip-view))

(defn handle-wire-extruder-click []
  (if (>= @paperclips (:price @wire-extruders))
    (do (swap! paperclips - (:price @wire-extruders))
        (swap! wire-extruders inc-number)
        (swap! wire-extruders double-price)
        (wire-extruder-view)
        (paperclip-view))))


;; The Beginning:

(.addEventListener clickable "click" handle-paperclip-click)
