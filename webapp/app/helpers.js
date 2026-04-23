/* Helper functions for portfolio */
window.PortfolioHelpers = {
    contactRow: function(Icon, HBox, Label, iconSrc, labelText, ctrl) {
        return new HBox({
            alignItems: "Center",
            items: [
                new Icon({ src: iconSrc, color: "#0A6ED1" }).addStyleClass("sapUiSmallMarginEnd"),
                new Label({ text: labelText, design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                ctrl
            ]
        }).addStyleClass("sapUiSmallMarginBottom");
    },
    skillRow: function(HBox, Label, ProgressIndicator, name, pct, disp, state) {
        return new HBox({
            alignItems: "Center",
            items: [
                new Label({ text: name, design: "Bold", width: "140px" }),
                new ProgressIndicator({ percentValue: pct, displayValue: disp, state: state, width: "100%" })
            ]
        }).addStyleClass("sapUiSmallMarginBottom");
    },
    statBox: function(VBox, Title, Text, num, label) {
        return new VBox({
            alignItems: "Center",
            items: [
                new Title({ text: num, level: "H2" }),
                new Text({ text: label })
            ]
        }).addStyleClass("statBox");
    }
};