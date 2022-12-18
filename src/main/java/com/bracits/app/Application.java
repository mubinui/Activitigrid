package com.bracits.app;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */
@SpringBootApplication
@Theme(value = "activitigrid")
@NpmPackage(value = "line-awesome", version = "1.3.0")
public class Application implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /**
     * A Designer generated component for the activiti-grid-view template.
     *
     * Designer will add and remove fields with @Id mappings but
     * does not overwrite or otherwise change this file.
     */
    @Tag("activiti-grid-view")
    @JsModule("./activiti-grid-view.ts")
    public static class ActivitiGridView extends LitTemplate {

        @Id("vaadinHorizontalLayout")
        private HorizontalLayout vaadinHorizontalLayout;
        @Id("vaadinVerticalLayout")
        private VerticalLayout vaadinVerticalLayout;

        /**
         * Creates a new ActivitiGridView.
         */
        public ActivitiGridView() {
            // You can initialise any data required for the connected UI components here.
        }

    }
}
