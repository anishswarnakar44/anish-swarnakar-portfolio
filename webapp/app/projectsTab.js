/* Projects Tab */
window.createProjectsTab = function(ITF, VB, HB, Pn, Tx, Ti, Lb, OS, Li, SLI) {
    function pc(t, tech, tools, desc, feats) {
        var fi = feats.map(function(f) {
            return new SLI({ title: f, icon: "sap-icon://accept" });
        });
        return new Pn({
            content: new VB({
                items: [
                    new HB({ justifyContent: "SpaceBetween", items: [
                        new Ti({ text: t, level: "H4" }),
                        new OS({ text: "Completed", state: "Success" })
                    ]}).addStyleClass("sapUiSmallMarginBottom"),
                    new HB({ items: [
                        new Lb({ text: "Tech:", design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                        new Tx({ text: tech })
                    ]}).addStyleClass("sapUiTinyMarginBottom"),
                    new HB({ items: [
                        new Lb({ text: "Tools:", design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                        new Tx({ text: tools })
                    ]}).addStyleClass("sapUiSmallMarginBottom"),
                    new Tx({ text: desc }).addStyleClass("sapUiSmallMarginBottom"),
                    new Lb({ text: "Key Features:", design: "Bold" }),
                    new Li({ items: fi })
                ]
            }).addStyleClass("sapUiSmallMargin")
        }).addStyleClass("projectCard sapUiMediumMarginBottom");
    }
    return new ITF({
        icon: "sap-icon://project-definition-triangle-2",
        text: "Projects", key: "projects",
        content: new VB({ items: [
            pc("Online Payment Fraud Detection",
               "Machine Learning | Python",
               "Python, Scikit-learn, Pandas, NumPy, Google Colab",
               "Developed ML model to detect fraudulent online payments using Random Forest, Logistic Regression, and XGBoost.",
               ["Real-time fraud detection", "Feature engineering", "Ensemble techniques", "Imbalanced data handling", "Precision/Recall evaluation"]),
            pc("Rock and Mine Detection",
               "Machine Learning | Python",
               "Python, Scikit-learn, Pandas, Matplotlib, Google Colab",
               "Built sonar data classifier to distinguish rocks from mines using 60 frequency band features and supervised learning.",
               ["Sonar signal preprocessing", "Feature selection", "Logistic Regression and SVM", "Cross-validation", "Decision boundary visualization"])
        ]}).addStyleClass("sapUiSmallMargin")
    });
};