package com.daniel.snackapp;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "snacks", schema = "dbo", catalog = "Snacks")
public class SnacksEntity {
    private int id;
    private String name;
    private Integer calories;
    private Integer fat;
    private Integer carbs;
    private Integer protein;

    @Id
    @Column(name = "Id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "calories")
    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    @Basic
    @Column(name = "fat")
    public Integer getFat() {
        return fat;
    }

    public void setFat(Integer fat) {
        this.fat = fat;
    }

    @Basic
    @Column(name = "carbs")
    public Integer getCarbs() {
        return carbs;
    }

    public void setCarbs(Integer carbs) {
        this.carbs = carbs;
    }

    @Basic
    @Column(name = "protein")
    public Integer getProtein() {
        return protein;
    }

    public void setProtein(Integer protein) {
        this.protein = protein;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SnacksEntity that = (SnacksEntity) o;

        if (id != that.id) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (calories != null ? !calories.equals(that.calories) : that.calories != null) return false;
        if (fat != null ? !fat.equals(that.fat) : that.fat != null) return false;
        if (carbs != null ? !carbs.equals(that.carbs) : that.carbs != null) return false;
        if (protein != null ? !protein.equals(that.protein) : that.protein != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (calories != null ? calories.hashCode() : 0);
        result = 31 * result + (fat != null ? fat.hashCode() : 0);
        result = 31 * result + (carbs != null ? carbs.hashCode() : 0);
        result = 31 * result + (protein != null ? protein.hashCode() : 0);
        return result;
    }
}
