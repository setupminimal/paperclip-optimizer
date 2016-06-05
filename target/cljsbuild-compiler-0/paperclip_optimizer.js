// Compiled by ClojureScript 0.0-2156
goog.provide('paperclip_optimizer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
paperclip_optimizer.exp = (function exp(a,b){paperclip_optimizer.exp_internal = (function exp_internal(a__$1,b__$1,acc){while(true){
if((b__$1 <= 0))
{return acc;
} else
{{
var G__4987 = a__$1;
var G__4988 = (b__$1 - 1);
var G__4989 = (a__$1 * acc);
a__$1 = G__4987;
b__$1 = G__4988;
acc = G__4989;
continue;
}
}
break;
}
});
return paperclip_optimizer.exp_internal.call(null,a,b,1);
});
paperclip_optimizer.inc_number = (function inc_number(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"number","number",4274507451),(new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(a) + 1));
});
paperclip_optimizer.remove_stock = (function remove_stock(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),(new cljs.core.Keyword(null,"in-stock","in-stock",3859602400).cljs$core$IFn$_invoke$arity$1(a) - 1));
});
/**
* @param {...*} var_args
*/
paperclip_optimizer.set_html_BANG_ = (function() { 
var set_html_BANG___delegate = function (element,help_text,args){return element.innerHTML = clojure.string.join.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"<abbr title=\""),cljs.core._conj.call(null,cljs.core.List.EMPTY,help_text),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\">"),args,cljs.core._conj.call(null,cljs.core.List.EMPTY,"</abbr>"))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18))))));
};
var set_html_BANG_ = function (element,help_text,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_html_BANG___delegate.call(this,element,help_text,args);};
set_html_BANG_.cljs$lang$maxFixedArity = 2;
set_html_BANG_.cljs$lang$applyTo = (function (arglist__4990){
var element = cljs.core.first(arglist__4990);
arglist__4990 = cljs.core.next(arglist__4990);
var help_text = cljs.core.first(arglist__4990);
var args = cljs.core.rest(arglist__4990);
return set_html_BANG___delegate(element,help_text,args);
});
set_html_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_html_BANG___delegate;
return set_html_BANG_;
})()
;
paperclip_optimizer.make_shown = (function make_shown(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"shown","shown",1123317891),true);
});
paperclip_optimizer.current_price = (function current_price(a){return (new cljs.core.Keyword(null,"price","price",1120838843).cljs$core$IFn$_invoke$arity$1(a) / new cljs.core.Keyword(null,"in-stock","in-stock",3859602400).cljs$core$IFn$_invoke$arity$1(a));
});
paperclip_optimizer.increase_stock = (function increase_stock(a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),(function (){var x__3717__auto__ = (new cljs.core.Keyword(null,"in-stock","in-stock",3859602400).cljs$core$IFn$_invoke$arity$1(a) + 1);var y__3718__auto__ = 100;return ((x__3717__auto__ < y__3718__auto__) ? x__3717__auto__ : y__3718__auto__);
})());
});
paperclip_optimizer.paperclips_sold = cljs.core.atom.call(null,1);
paperclip_optimizer.monies = cljs.core.atom.call(null,10);
paperclip_optimizer.paperclips = cljs.core.atom.call(null,0);
paperclip_optimizer.pliers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),1000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),100], null));
paperclip_optimizer.wire_extruders = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),5000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),100], null));
paperclip_optimizer.automatic_salesmachines = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),10000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),100], null));
paperclip_optimizer.mechanical_hands = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),20000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),100], null));
paperclip_optimizer.streamlinings = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),5000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),10], null));
paperclip_optimizer.factories = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),100000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),100], null));
paperclip_optimizer.flimsies = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",4274507451),0,new cljs.core.Keyword(null,"shown","shown",1123317891),false,new cljs.core.Keyword(null,"price","price",1120838843),15000,new cljs.core.Keyword(null,"in-stock","in-stock",3859602400),10], null));
paperclip_optimizer.money_help = "Sell paperclips for money: The more paperclips you sell, the less you will be able to get for them. The price goes up as people break paperclips.";
paperclip_optimizer.paperclip_help = "Clicking here uses manual labor to create paperclips. Buying tools can help increase the efficiency of your production. It costs a tiny amount to buy metal for each paperclip.";
paperclip_optimizer.plier_help = "Pliers help you bend wires more quickly.";
paperclip_optimizer.wire_extruder_help = "Every wire extruder you buy increases the number of paperclips you get per click by five.";
paperclip_optimizer.automatic_salesmachine_help = "Sells 1 paperclip per second.";
paperclip_optimizer.mechanical_hand_help = "Makes paperclips, but only very slowly.";
paperclip_optimizer.streamlining_help = "By carefully organizing your paperclip production process, you can boost the number of paperclips you produce by 5%";
paperclip_optimizer.factory_help = "An automated factory produces paperclips much faster than mechanical hands.";
paperclip_optimizer.flimsy_help = "New technology lets you make paperclips more fragile, so that they break faster.";
paperclip_optimizer.money = document.getElementById("money");
paperclip_optimizer.clickable = document.getElementById("clickable");
paperclip_optimizer.plier = document.getElementById("plier");
paperclip_optimizer.wire_extruder = document.getElementById("wire-extruder");
paperclip_optimizer.automatic_salesmachine = document.getElementById("automatic-salesmachine");
paperclip_optimizer.mechanical_hand = document.getElementById("mechanical-hand");
paperclip_optimizer.streamlining = document.getElementById("streamlining");
paperclip_optimizer.factory = document.getElementById("factory");
paperclip_optimizer.flimsy = document.getElementById("flimsy");
paperclip_optimizer.show_QMARK_ = (function show_QMARK_(record,element,handler){if(new cljs.core.Keyword(null,"shown","shown",1123317891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,record)) === false)
{element.addEventListener("click",handler);
return cljs.core.swap_BANG_.call(null,record,paperclip_optimizer.make_shown);
} else
{return null;
}
});
paperclip_optimizer.show_price = (function show_price(record){if((new cljs.core.Keyword(null,"in-stock","in-stock",3859602400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,record)) >= 1))
{return (Math.ceil.call(null,(100 * paperclip_optimizer.current_price.call(null,cljs.core.deref.call(null,record)))) / 100);
} else
{return "out-of-stock";
}
});
paperclip_optimizer.money_view = (function money_view(){return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.money,paperclip_optimizer.money_help,"Click to sell paperclips!</br>Total: ",(Math.floor.call(null,(100 * cljs.core.deref.call(null,paperclip_optimizer.monies))) / 100),"$</br>(Paperclips in Circulation: ",Math.floor.call(null,cljs.core.deref.call(null,paperclip_optimizer.paperclips_sold)),")</br>","(Paperclips go for: $",(Math.floor.call(null,(2000 / (cljs.core.deref.call(null,paperclip_optimizer.paperclips_sold) + 1))) / 100),")");
});
paperclip_optimizer.paperclip_view = (function paperclip_view(){return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.clickable,paperclip_optimizer.paperclip_help,"You have ",Math.floor.call(null,cljs.core.deref.call(null,paperclip_optimizer.paperclips))," paperclip",((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,paperclip_optimizer.paperclips),1)))?"s":null),"!\t[?]");
});
paperclip_optimizer.plier_view = (function plier_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.pliers,paperclip_optimizer.plier,paperclip_optimizer.handle_plier_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.plier,paperclip_optimizer.plier_help,"Pliers: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.pliers))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.pliers),")\t[?]");
});
paperclip_optimizer.wire_extruder_view = (function wire_extruder_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.wire_extruders,paperclip_optimizer.wire_extruder,paperclip_optimizer.handle_wire_extruder_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.wire_extruder,paperclip_optimizer.wire_extruder_help,"Wire Extruders: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.wire_extruders),")\t[?]");
});
paperclip_optimizer.automatic_salesmachine_view = (function automatic_salesmachine_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.automatic_salesmachines,paperclip_optimizer.automatic_salesmachine,paperclip_optimizer.handle_automatic_salesmachine_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.automatic_salesmachine,paperclip_optimizer.automatic_salesmachine_help,"Vending Machines: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.automatic_salesmachines))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.automatic_salesmachines),")\t[?]");
});
paperclip_optimizer.mechanical_hand_view = (function mechanical_hand_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.mechanical_hands,paperclip_optimizer.mechanical_hand,paperclip_optimizer.handle_mechanical_hand_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.mechanical_hand,paperclip_optimizer.mechanical_hand_help,"Mechanical Hands: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.mechanical_hands))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.mechanical_hands),")\t[?]");
});
paperclip_optimizer.streamlining_view = (function streamlining_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.streamlinings,paperclip_optimizer.streamlining,paperclip_optimizer.handle_streamlining_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.streamlining,paperclip_optimizer.streamlining_help,"Process Improvements: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.streamlinings))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.streamlinings),") [?]");
});
paperclip_optimizer.factory_view = (function factory_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.factories,paperclip_optimizer.factory,paperclip_optimizer.handle_factory_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.factory,paperclip_optimizer.factory_help,"Paperclip Factories: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.factories))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.factories),") [?]");
});
paperclip_optimizer.flimsy_view = (function flimsy_view(){paperclip_optimizer.show_QMARK_.call(null,paperclip_optimizer.flimsies,paperclip_optimizer.flimsy,paperclip_optimizer.handle_flimsy_click);
return paperclip_optimizer.set_html_BANG_.call(null,paperclip_optimizer.flimsy,paperclip_optimizer.flimsy_help,"Quality Reductions: ",new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.flimsies))," (Cost: $",paperclip_optimizer.show_price.call(null,paperclip_optimizer.flimsies),") [?]");
});
paperclip_optimizer.buy_okay_QMARK_ = (function buy_okay_QMARK_(record){return ((new cljs.core.Keyword(null,"in-stock","in-stock",3859602400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,record)) >= 1)) && ((cljs.core.deref.call(null,paperclip_optimizer.monies) >= paperclip_optimizer.current_price.call(null,cljs.core.deref.call(null,record))));
});
paperclip_optimizer.buy = (function buy(record){cljs.core.swap_BANG_.call(null,paperclip_optimizer.monies,cljs.core._,paperclip_optimizer.current_price.call(null,cljs.core.deref.call(null,record)));
cljs.core.swap_BANG_.call(null,record,paperclip_optimizer.inc_number);
return cljs.core.swap_BANG_.call(null,record,paperclip_optimizer.remove_stock);
});
paperclip_optimizer.price_show = (function price_show(record,view){if((cljs.core.deref.call(null,paperclip_optimizer.monies) >= paperclip_optimizer.current_price.call(null,cljs.core.deref.call(null,record))))
{return view.call(null);
} else
{return null;
}
});
paperclip_optimizer.handle_money_click = (function handle_money_click(){if((cljs.core.deref.call(null,paperclip_optimizer.paperclips) >= 1))
{cljs.core.swap_BANG_.call(null,paperclip_optimizer.monies,cljs.core._PLUS_,(20 / (cljs.core.deref.call(null,paperclip_optimizer.paperclips_sold) + 1)));
cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips,cljs.core.dec);
cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips_sold,cljs.core.inc);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.pliers,paperclip_optimizer.plier_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.wire_extruders,paperclip_optimizer.wire_extruder_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.automatic_salesmachines,paperclip_optimizer.automatic_salesmachine_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.mechanical_hands,paperclip_optimizer.mechanical_hand_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.streamlinings,paperclip_optimizer.streamlining_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.factories,paperclip_optimizer.factory_view);
paperclip_optimizer.price_show.call(null,paperclip_optimizer.flimsies,paperclip_optimizer.flimsy_view);
paperclip_optimizer.money_view.call(null);
return paperclip_optimizer.paperclip_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.handle_paperclip_click = (function handle_paperclip_click(){if((cljs.core.deref.call(null,paperclip_optimizer.monies) >= 0.001))
{cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips,cljs.core._PLUS_,(paperclip_optimizer.exp.call(null,1.05,new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.streamlinings))) * ((1 + new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.pliers))) + (5 * new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.wire_extruders))))));
cljs.core.swap_BANG_.call(null,paperclip_optimizer.monies,cljs.core._,0.001);
} else
{}
return paperclip_optimizer.paperclip_view.call(null);
});
paperclip_optimizer.handle_plier_click = (function handle_plier_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.pliers))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.pliers);
paperclip_optimizer.plier_view.call(null);
return paperclip_optimizer.money_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.handle_wire_extruder_click = (function handle_wire_extruder_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.wire_extruders))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.wire_extruders);
paperclip_optimizer.wire_extruder_view.call(null);
return paperclip_optimizer.money_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.handle_automatic_salesmachine_click = (function handle_automatic_salesmachine_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.automatic_salesmachines))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.automatic_salesmachines);
paperclip_optimizer.automatic_salesmachine_view.call(null);
paperclip_optimizer.money_view.call(null);
return window.setInterval(paperclip_optimizer.automatic_sale,1003);
} else
{return null;
}
});
paperclip_optimizer.handle_mechanical_hand_click = (function handle_mechanical_hand_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.mechanical_hands))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.mechanical_hands);
paperclip_optimizer.mechanical_hand_view.call(null);
paperclip_optimizer.money_view.call(null);
return window.setInterval(paperclip_optimizer.automatic_production,10000);
} else
{return null;
}
});
paperclip_optimizer.handle_streamlining_click = (function handle_streamlining_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.streamlinings))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.streamlinings);
paperclip_optimizer.streamlining_view.call(null);
return paperclip_optimizer.money_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.handle_factory_click = (function handle_factory_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.factories))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.factories);
paperclip_optimizer.factory_view.call(null);
paperclip_optimizer.money_view.call(null);
return window.setInterval(paperclip_optimizer.automatic_production,1002);
} else
{return null;
}
});
paperclip_optimizer.handle_flimsy_click = (function handle_flimsy_click(){if(paperclip_optimizer.buy_okay_QMARK_.call(null,paperclip_optimizer.flimsies))
{paperclip_optimizer.buy.call(null,paperclip_optimizer.flimsies);
paperclip_optimizer.flimsy_view.call(null);
return paperclip_optimizer.money_view.call(null);
} else
{return null;
}
});
paperclip_optimizer.paperclip_loss = (function paperclip_loss(){cljs.core.swap_BANG_.call(null,paperclip_optimizer.paperclips_sold,(function (x){var x__3710__auto__ = 1;var y__3711__auto__ = (x / (1 + (0.05 * (new cljs.core.Keyword(null,"number","number",4274507451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,paperclip_optimizer.flimsies)) + 1))));return ((x__3710__auto__ > y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
}));
return paperclip_optimizer.money_view.call(null);
});
paperclip_optimizer.restockables = cljs.core.list(new cljs.core.Symbol(null,"pliers","pliers",1668902418,null),new cljs.core.Symbol(null,"wire-extruders","wire-extruders",2119486231,null),new cljs.core.Symbol(null,"automatic-salesmachines","automatic-salesmachines",-1117309009,null),new cljs.core.Symbol(null,"mechanical-hands","mechanical-hands",-936204545,null),new cljs.core.Symbol(null,"factories","factories",1327128801,null));
paperclip_optimizer.restock_views = cljs.core.list(new cljs.core.Symbol(null,"plier-view","plier-view",1252157169,null),new cljs.core.Symbol(null,"wire-extruder-view","wire-extruder-view",-1630684810,null),new cljs.core.Symbol(null,"automatic-salesmachine-view","automatic-salesmachine-view",-14149106,null),new cljs.core.Symbol(null,"mechanical-hand-view","mechanical-hand-view",-854892194,null),new cljs.core.Symbol(null,"factory-view","factory-view",728021825,null));
paperclip_optimizer.restock = (function restock(){var iter__4120__auto___5007 = (function iter__4999(s__5000){return (new cljs.core.LazySeq(null,(function (){var s__5000__$1 = s__5000;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5000__$1);if(temp__4092__auto__)
{var s__5000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5000__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__5000__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__5002 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__5001 = 0;while(true){
if((i__5001 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__5001);cljs.core.chunk_append.call(null,b__5002,cljs.core.swap_BANG_.call(null,x,paperclip_optimizer.increase_stock));
{
var G__5008 = (i__5001 + 1);
i__5001 = G__5008;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5002),iter__4999.call(null,cljs.core.chunk_rest.call(null,s__5000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5002),null);
}
} else
{var x = cljs.core.first.call(null,s__5000__$2);return cljs.core.cons.call(null,cljs.core.swap_BANG_.call(null,x,paperclip_optimizer.increase_stock),iter__4999.call(null,cljs.core.rest.call(null,s__5000__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});iter__4120__auto___5007.call(null,paperclip_optimizer.restockables);
var iter__4120__auto__ = (function iter__5003(s__5004){return (new cljs.core.LazySeq(null,(function (){var s__5004__$1 = s__5004;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5004__$1);if(temp__4092__auto__)
{var s__5004__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5004__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__5004__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__5006 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__5005 = 0;while(true){
if((i__5005 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__5005);cljs.core.chunk_append.call(null,b__5006,x.call(null));
{
var G__5009 = (i__5005 + 1);
i__5005 = G__5009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5006),iter__5003.call(null,cljs.core.chunk_rest.call(null,s__5004__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5006),null);
}
} else
{var x = cljs.core.first.call(null,s__5004__$2);return cljs.core.cons.call(null,x.call(null),iter__5003.call(null,cljs.core.rest.call(null,s__5004__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,paperclip_optimizer.restock_views);
});
paperclip_optimizer.automatic_sale = (function automatic_sale(){return paperclip_optimizer.handle_money_click.call(null);
});
paperclip_optimizer.automatic_production = (function automatic_production(){return paperclip_optimizer.handle_paperclip_click.call(null);
});
paperclip_optimizer.clickable.addEventListener("click",paperclip_optimizer.handle_paperclip_click);
paperclip_optimizer.money.addEventListener("click",paperclip_optimizer.handle_money_click);
window.setInterval(paperclip_optimizer.paperclip_loss,1000);
window.setInterval(paperclip_optimizer.restock,10001);
