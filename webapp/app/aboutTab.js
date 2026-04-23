/* About Me Tab */
window.createAboutTab = function(IconTabFilter, VBox, HBox, Panel, Text, Label, Link, Icon, ProgressIndicator) {
    var h = window.PortfolioHelpers;
    var cr = function(ic, lb, c) { return h.contactRow(Icon, HBox, Label, ic, lb, c); };
    var sr = function(n, p, d, s) { return h.skillRow(HBox, Label, ProgressIndicator, n, p, d, s); };

    var hobbiesHtml = '<div style="padding:12px">' +
        '<span class="softSkillTag">Playing Tabla</span>' +
        '<span class="softSkillTag">ML Research</span>' +
        '<span class="softSkillTag">Open Source</span>' +
        '<span class="softSkillTag">Problem Solving</span>' +
        '<span class="softSkillTag">Tech Blogs</span>' +
        '<span class="softSkillTag">Photography</span>' +
        '</div>';

    return new IconTabFilter({
        icon: "sap-icon://person-placeholder",
        text: "About Me",
        key: "about",
        content: new VBox({
            items: [
                new Panel({
                    headerText: "Career Objective",
                    content: new Text({
                        text: "I am a passionate Computer Science graduate from Narula Institute of Technology (MAKAUT) with a strong CGPA of 9.11. I aim to build a long-term career in a field with opportunities for growth and leadership. I aspire to utilize my technical skills to enhance the organization. I am dedicated to working diligently to meet my goals and deliver top-notch performance. I am enthusiastic about applying my innovative abilities and expertise to successfully complete projects."
                    }).addStyleClass("sapUiSmallMargin")
                }).addStyleClass("sapUiMediumMarginBottom"),

                new Panel({
                    headerText: "Contact Information",
                    content: new VBox({
                        items: [
                            cr("sap-icon://email", "Email:", new Link({ text: "anishswarnakar57@gmail.com", href: "mailto:anishswarnakar57@gmail.com" })),
                            cr("sap-icon://call", "Phone:", new Text({ text: "+91 8617793338" })),
                            cr("sap-icon://map", "Location:", new Text({ text: "Belur Math, Howrah, West Bengal - 711202" })),
                            cr("sap-icon://chain-link", "GitHub:", new Link({ text: "github.com/anishswarnakar44", href: "https://github.com/anishswarnakar44", target: "_blank" })),
                            cr("sap-icon://connected", "LinkedIn:", new Link({ text: "linkedin.com/in/anish-swarnakar", href: "https://www.linkedin.com/in/anish-swarnakar-83861922b/", target: "_blank" }))
                        ]
                    }).addStyleClass("sapUiSmallMargin")
                }).addStyleClass("sapUiMediumMarginBottom"),

                new Panel({
                    headerText: "Languages",
                    content: new VBox({
                        items: [
                            sr("English", 90, "Professional Proficiency", "Success"),
                            sr("Hindi", 95, "Native / Bilingual", "Success"),
                            sr("Bengali", 100, "Native / Bilingual", "Success")
                        ]
                    }).addStyleClass("sapUiSmallMargin")
                }).addStyleClass("sapUiMediumMarginBottom"),

                new Panel({
                    headerText: "Hobbies & Interests",
                    content: new sap.ui.core.HTML({ content: hobbiesHtml })
                })
            ]
        }).addStyleClass("sapUiSmallMargin")
    });
};