/* Achievements & Timeline Tab */
window.createAchievementsTab = function(ITF, VB, HB, Pn, Tx, Ti, Lb, OS, Ic) {
    function ac(title, desc, year, icon) {
        return new Pn({
            content: new VB({
                items: [
                    new HB({ alignItems: "Center", items: [
                        new Ic({ src: icon, size: "1.5rem", color: "#E78C07" }).addStyleClass("sapUiSmallMarginEnd"),
                        new Ti({ text: title, level: "H5" }),
                        new OS({ text: year, state: "Information" }).addStyleClass("sapUiSmallMarginBegin")
                    ]}).addStyleClass("sapUiSmallMarginBottom"),
                    new Tx({ text: desc })
                ]
            }).addStyleClass("sapUiSmallMargin")
        }).addStyleClass("achieveCard sapUiMediumMarginBottom");
    }

    function tl(year, event) {
        return new HB({
            items: [
                new VB({
                    items: [
                        new Lb({ text: year, design: "Bold" }),
                        new Tx({ text: event })
                    ]
                }).addStyleClass("sapUiSmallMarginBottom")
            ]
        }).addStyleClass("timelineItem sapUiSmallMarginBottom");
    }

    return new ITF({
        icon: "sap-icon://competitor",
        text: "Achievements",
        key: "achievements",
        content: new VB({
            items: [
                new Ti({ text: "Achievements & Certifications", level: "H4" }).addStyleClass("sapUiMediumMarginBottom"),
                ac("Research Paper Publication",
                   "Published in Indian Journal of Natural Science on PVC modification. ISSN: 0976-0997.",
                   "2024", "sap-icon://document"),
                ac("Best Presenter Award",
                   "Received Best Presenter Award for 'Effect of Poly Alkyl Acrylate Mixture on PVC for Property Modification'.",
                   "2024", "sap-icon://competitor"),
                ac("ML Internship Certificate",
                   "Completed Training and Internship in Machine Learning (Python) at Ardent Computech Pvt. Ltd.",
                   "2024", "sap-icon://badge"),

                new Ti({ text: "Timeline", level: "H4" }).addStyleClass("sapUiLargeMarginTop sapUiMediumMarginBottom"),
                tl("2019", "Completed ICSE from Agrasain Boys School with 90%"),
                tl("2021", "Completed ISC from Don Bosco School with 90.17%"),
                tl("2021", "Started B.Tech CSE at Narula Institute of Technology"),
                tl("2023", "Completed ML Internship at Ardent Computech"),
                tl("2024", "Published Research Paper in Indian Journal of Natural Science"),
                tl("2024", "Won Best Presenter Award at Academic Conference"),
                tl("2025", "Graduating B.Tech with CGPA 9.11")
            ]
        }).addStyleClass("sapUiSmallMargin")
    });
};