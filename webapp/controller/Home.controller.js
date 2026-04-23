sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("portfolio.controller.Home", {

        onInit: function () {
        },

        onGithubPress: function () {
            window.open("https://github.com/anishswarnakar44", "_blank");
        },

        onLinkedInPress: function () {
            window.open("https://www.linkedin.com/in/anish-swarnakar-83861922b/", "_blank");
        },

        onEmailPress: function () {
            window.open("mailto:anishswarnakar57@gmail.com");
        },

        onCallPress: function () {
            window.open("tel:+918617793338");
        },

        onDownloadResume: function () {
            MessageToast.show("Resume download initiated!");
        }
    });
});