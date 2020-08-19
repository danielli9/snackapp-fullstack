package com.daniel.snackapp.entity;

import javax.persistence.*;

@Entity
@Table(name="snacks")
public class Snack {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column(name="Id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="calories")
    private Float calories;

    @Column(name="fat")
    private Float fat;

    @Column(name="carbs")
    private Float carbs;

    @Column(name="protein")
    private Float protein;

    public Snack() {}
//    public Snack(int id, String name, Float calories, Float fat, Float carbs, Float protein) {
//        super();5
////        this.id = id;
//        this.name = name;
//        this.calories = calories;
//        this.fat = fat;
//        this.carbs = carbs;
//        this.protein = protein;
//
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getCalories() {
        return calories;
    }

    public void setCalories(Float calories) {
        this.calories = calories;
    }

    public Float getFat() {
        return fat;
    }

    public void setFat(Float fat) {
        this.fat = fat;
    }

    public Float getCarbs() {
        return carbs;
    }

    public void setCarbs(Float carbs) {
        this.carbs = carbs;
    }

    public Float getProtein() {
        return protein;
    }

    public void setProtein(Float protein) {
        this.protein = protein;
    }

    //define equality here?

}
