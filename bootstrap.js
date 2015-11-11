"use strict";

const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;

const {Services} = Cu.import("resource://gre/modules/Services.jsm");
const {LightweightThemeManager} = Cu.import("resource://gre/modules/LightweightThemeManager.jsm");

function install() {
  LightweightThemeManager.currentTheme = LightweightThemeManager.getUsedTheme("firefox-devedition@mozilla.org");
}

function startup() {
  LightweightThemeManager.addBuiltInTheme({
    id: "firefox-devedition@mozilla.org",
    name: "Developer Edition",
    headerURL: "resource:///chrome/browser/content/browser/defaultthemes/devedition.header.png",
    iconURL: "resource:///chrome/browser/content/browser/defaultthemes/devedition.icon.png",
    author: "Mozilla"
  });
}
function shutdown() {
  LightweightThemeManager.clearBuiltInThemes();
}

function uninstall() {
  LightweightThemeManager.currentTheme = null;
  LightweightThemeManager.clearBuiltInThemes();
}
