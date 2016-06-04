// Compiled by ClojureScript 0.0-2156
goog.provide('paperclip_optimizer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
paperclip_optimizer.third = (function third(c){return cljs.core.nth.call(null,c,2);
});
paperclip_optimizer.inc_number = (function inc_number(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"number","number",4274507451),(new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(a) + 1));
});
paperclip_optimizer.double_price = (function double_price(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"price","price",1120838843),(2 * new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(a)));
});
/**
* @param {...*} var_args
*/
paperclip_optimizer.set_html_BANG_ = (function() { 
var set_html_BANG___delegate = function (element,args){return element.innerHTML = clojure.string.join.call(null,args);
};
var set_html_BANG_ = function (element,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_html_BANG___delegate.call(this,element,args);};
set_html_BANG_.cljs$lang$maxFixedArity = 1;
set_html_BANG_.cljs$lang$applyTo = (function (arglist__4795){
var element = cljs.core.first(arglist__4795);
var args = cljs.core.rest(arglist__4795);
return set_html_BANG___delegate(element,args);
});
set_html_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_html_BANG___delegate;
return set_html_BANG_;
})()
;
paperclip_optimizer.paperclips = cljs.core.atom.call(null,0);
paperclip_optimizer.wire_extruders = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),10], null));
paperclip_optimizer.clickable = document.getElementById("clickable");
paperclip_optimizer.wire_extruder = document.getElementById("wire-extruder");
paperclip_optimizer.paperclip_view = (function paperclip_view(){return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.clickable,"You have ",cljs.core.deref.call(null,paperclip_optimizer.paperclips)," paperclips!");
});
paperclip_optimizer.wire_extruder_view = (function wire_extruder_view(){if(new cljs.core.Keyword(null,"shown","shown",1123317891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders)) === false)
{paperclip_optimizer.wire_extruder.addEventListener("click",paperclip_optimizer.handle_wire_extruder_click);
} else
{}
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.wire_extruder,"Wire Extruders: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders))," (Cost: ",new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders)),")");
});
paperclip_optimizer.handle_paperclip_click = (function handle_paperclip_click(){cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips,cljs.core._PLUS_,new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders)),1);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,paperclip_optimizer.paperclips),10))
{paperclip_optimizer.wire_extruder_view.call(null);
} else
{}
return paperclip_optimizer.paperclip_view.call(null);
});
paperclip_optimizer.handle_wire_extruder_click = (function handle_wire_extruder_click(){if((cljs.core.deref.call(null,paperclip_optimizer.paperclips) >= new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders))))
{cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips,cljs.core._,new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders)));
cljs.core.swap_BANG_.call(null,paperclip_optimizer.wire_extruders,paperclip_optimizer.inc_number);
cljs.core.swap_BANG_.call(null,paperclip_optimizer.wire_extruders,paperclip_optimizer.double_price);
paperclip_optimizer.wire_extruder_view.call(null);
return paperclip_optimizer.paperclip_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.clickable.addEventListener("click",paperclip_optimizer.handle_paperclip_click);
