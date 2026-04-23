/* Skills Tab */
window.createSkillsTab = function(IconTabFilter, VBox, HBox, Panel, Text, Label, ProgressIndicator) {
    var h = window.PortfolioHelpers;
    var sr = function(n, p, d, s) { return h.skillRow(HBox, Label, ProgressIndicator, n, p, d, s); };

    var softSkillsHtml = '<div style="padding:12px">' +
        '<span class="softSkillTag">Adaptable & Team Player</span>' +
        '<span class="softSkillTag">Leadership Quality</span>' +
        '<span class="softSkillTag">Ethical & Time Management</span>' +
        '<span class="softSkillTag">Analytical Thinker</span>' +
        '<span class="softSkillTag">Problem Solving</span>' +
        '<span class="softSkillTag">Effective Communication</span>' +
        '<span class="softSkillTag">Quick Learner</span>' +
        '<span class="softSkillTag">Detail Oriented</span>' +
        '</div>';

    return new IconTabFilter({
        icon: "sap-icon://wrench",
        text: "Skills",
        key: "skills",
        content: new VBox({
            items: [
                new Panel({
                    headerText: "Programming Languages",
                    content: new VBox({
                        items: [
                            sr("C", 85, "85% - Advanced", "Success"),
                            sr("Java", 80, "80% - Advanced", "Success"),
                            sr("SQL", 85, "85% - Advanced", "Success"),
                            sr("Python", 80, "80% - Advanced", "Information"),
                            sr("HTML/CSS", 70, "70% - Intermediate", "Warning"),
                            sr("JavaScript", 65, "65% - Intermediate", "Warning")
                        ]
                    }).addStyleClass("sapUiSmallMargin")
                }).addStyleClass("sapUiMediumMarginBottom"),

                new Panel({
                    headerText: "Technical Skills",
                    content: new VBox({
                        items: [
                            sr("Machine Learning", 80, "80% - Advanced", "Success"),
                            sr("DSA", 85, "85% - Advanced", "Success"),
                            sr("DBMS", 85, "85% - Advanced", "Success"),
                            sr("Google Colab", 80, "80% - Advanced", "Information"),
                            sr("Git & GitHub", 75, "75% - Proficient", "Information"),
                            sr("Data Analysis", 75, "75% - Proficient", "Warning")
                        ]
                    }).addStyleClass("sapUiSmallMargin")
                }).addStyleClass("sapUiMediumMarginBottom"),

                new Panel({
                    headerText: "Soft Skills & Personality Traits",
                    content: new sap.ui.core.HTML({ content: softSkillsHtml })
                })
            ]
        }).addStyleClass("sapUiSmallMargin")
    });
};