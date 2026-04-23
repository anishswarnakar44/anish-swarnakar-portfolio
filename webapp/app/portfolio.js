/* Main Portfolio Assembly */
sap.ui.getCore().attachInit(function () {
    sap.ui.require([
        "sap/m/Shell", "sap/m/Page", "sap/m/Panel", "sap/m/VBox", "sap/m/HBox",
        "sap/m/Text", "sap/m/Title", "sap/m/Label", "sap/m/Link", "sap/m/Button",
        "sap/m/IconTabBar", "sap/m/IconTabFilter", "sap/m/ProgressIndicator",
        "sap/m/ObjectStatus", "sap/m/List", "sap/m/StandardListItem",
        "sap/m/Toolbar", "sap/m/ToolbarSpacer",
        "sap/f/Avatar", "sap/ui/core/Icon", "sap/ui/core/HTML"
    ], function (Shell, Page, Panel, VBox, HBox, Text, Title, Label, Link, Button,
                 IconTabBar, IconTabFilter, ProgressIndicator, ObjectStatus,
                 List, StandardListItem, Toolbar, ToolbarSpacer, Avatar, Icon, HTML) {

        var h = window.PortfolioHelpers;
        var sb = function(n, l) { return h.statBox(VBox, Title, Text, n, l); };

        // Hero
        var oHero = new VBox({ alignItems: "Center", items: [
            new Avatar({ initials: "AS", displaySize: "XL", backgroundColor: "Accent6" }).addStyleClass("sapUiSmallMarginBottom"),
            new Title({ text: "Anish Swarnakar", level: "H1", titleStyle: "H1" }).addStyleClass("sapUiSmallMarginBottom"),
            new Label({ text: "Software Engineer & ML Enthusiast", design: "Bold" }).addStyleClass("sapUiSmallMarginBottom"),
            new Text({ text: "B.Tech CSE | MAKAUT | CGPA: 9.11" }),
            new HBox({ justifyContent: "Center", wrap: "Wrap", items: [
                new Button({ text: "GitHub", icon: "sap-icon://chain-link", type: "Transparent", press: function() { window.open("https://github.com/anishswarnakar44","_blank"); }}).addStyleClass("sapUiTinyMarginEnd"),
                new Button({ text: "LinkedIn", icon: "sap-icon://connected", type: "Transparent", press: function() { window.open("https://www.linkedin.com/in/anish-swarnakar-83861922b/","_blank"); }}).addStyleClass("sapUiTinyMarginEnd"),
                new Button({ text: "Email", icon: "sap-icon://email", type: "Transparent", press: function() { window.open("mailto:anishswarnakar57@gmail.com"); }}).addStyleClass("sapUiTinyMarginEnd"),
                new Button({ text: "Call", icon: "sap-icon://call", type: "Transparent", press: function() { window.open("tel:+918617793338"); }})
            ]}).addStyleClass("sapUiSmallMarginTop")
        ]}).addStyleClass("heroSection sapUiMediumMarginBottom");

        // Stats
        var oStats = new HBox({ justifyContent: "Center", wrap: "Wrap", items: [
            sb("9.11","CGPA"), sb("2+","Projects"), sb("3","Certificates"), sb("1","Paper"), sb("3","Languages")
        ]}).addStyleClass("sapUiMediumMarginBottom");

        // Tabs
        var aboutTab = window.createAboutTab(IconTabFilter, VBox, HBox, Panel, Text, Label, Link, Icon, ProgressIndicator);
        var eduTab = window.createEducationTab(IconTabFilter, VBox, HBox, Panel, Text, Title, Label, ObjectStatus);
        var skillsTab = window.createSkillsTab(IconTabFilter, VBox, HBox, Panel, Text, Label, ProgressIndicator);
        var projTab = window.createProjectsTab(IconTabFilter, VBox, HBox, Panel, Text, Title, Label, ObjectStatus, List, StandardListItem);
        var achTab = window.createAchievementsTab(IconTabFilter, VBox, HBox, Panel, Text, Title, Label, ObjectStatus, Icon);

        var oTabBar = new IconTabBar({ expandable: false, items: [aboutTab, eduTab, skillsTab, projTab, achTab] });

        // Footer
        var oFooter = new VBox({ alignItems: "Center", items: [
            new Title({ text: "Anish Swarnakar" }),
            new Text({ text: "Built with SAP UI5 | 2025" }).addStyleClass("sapUiTinyMarginTop"),
            new Text({ text: "anishswarnakar57@gmail.com | +91 8617793338" }).addStyleClass("sapUiTinyMarginTop")
        ]}).addStyleClass("footerSection sapUiLargeMarginTop");

        // Page
        var oPage = new Page({ showHeader: false, enableScrolling: true,
            content: [oHero, oStats, oTabBar, oFooter]
        }).addStyleClass("sapUiResponsiveMargin");

        new Shell({ app: oPage }).placeAt("content");
    });
});