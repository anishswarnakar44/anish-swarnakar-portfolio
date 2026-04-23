/* Education Tab */
window.createEducationTab = function(IconTabFilter, VBox, HBox, Panel, Text, Title, Label, ObjectStatus) {

    function eduCard(degree, inst, university, year, score, desc) {
        return new Panel({
            content: new VBox({
                items: [
                    new HBox({
                        justifyContent: "SpaceBetween",
                        alignItems: "Center",
                        items: [
                            new Title({ text: degree, level: "H4" }),
                            new ObjectStatus({ text: year, state: "Information" })
                        ]
                    }).addStyleClass("sapUiSmallMarginBottom"),
                    new HBox({ items: [
                        new Label({ text: "Institution:", design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                        new Text({ text: inst })
                    ]}).addStyleClass("sapUiTinyMarginBottom"),
                    new HBox({ items: [
                        new Label({ text: "University/Board:", design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                        new Text({ text: university })
                    ]}).addStyleClass("sapUiTinyMarginBottom"),
                    new HBox({ items: [
                        new Label({ text: "Score:", design: "Bold" }).addStyleClass("sapUiSmallMarginEnd"),
                        new ObjectStatus({ text: score, state: "Success", icon: "sap-icon://status-positive" })
                    ]}).addStyleClass("sapUiSmallMarginBottom"),
                    new Text({ text: desc })
                ]
            }).addStyleClass("sapUiSmallMargin")
        }).addStyleClass("eduCard sapUiMediumMarginBottom");
    }

    return new IconTabFilter({
        icon: "sap-icon://education",
        text: "Education",
        key: "education",
        content: new VBox({
            items: [
                eduCard(
                    "B.Tech in Computer Science & Engineering",
                    "Narula Institute of Technology, Agarpara, Kolkata",
                    "MAKAUT (Maulana Abul Kalam Azad University of Technology)",
                    "2021 - 2025",
                    "CGPA: 9.11",
                    "Specialized in Computer Science with focus on Machine Learning, Data Structures & Algorithms, and Database Management Systems. Actively participated in research and technical projects."
                ),
                eduCard(
                    "ISC (Class XII) - Science Stream",
                    "Don Bosco School, Liluah",
                    "CISCE Board",
                    "2021",
                    "90.17%",
                    "Completed higher secondary education with distinction in Science stream with outstanding academic performance."
                ),
                eduCard(
                    "ICSE (Class X)",
                    "Agrasain Boys' School, Liluah",
                    "CISCE Board",
                    "2019",
                    "90%",
                    "Completed secondary education with outstanding academic performance across all subjects."
                )
            ]
        }).addStyleClass("sapUiSmallMargin")
    });
};