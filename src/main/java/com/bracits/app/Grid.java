package com.bracits.app;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Grid {
    @javax.persistence.Id
    String Id;
    String XMLs;

    public Grid(String id, String XMLs) {
        Id = id;
        this.XMLs = XMLs;
    }

    public Grid() {

    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getXMLs() {
        return XMLs;
    }

    public void setXMLs(String XMLs) {
        this.XMLs = XMLs;
    }

}
