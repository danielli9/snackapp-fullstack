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
    private Integer calories;

    @Column(name="fat")
    private Integer fat;

    @Column(name="carbs")
    private Integer carbs;

    @Column(name="protein")
    private Integer protein;

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

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Integer getFat() {
        return fat;
    }

    public void setFat(Integer fat) {
        this.fat = fat;
    }

    public Integer getCarbs() {
        return carbs;
    }

    public void setCarbs(Integer carbs) {
        this.carbs = carbs;
    }

    public Integer getProtein() {
        return protein;
    }

    public void setProtein(Integer protein) {
        this.protein = protein;
    }

    //define equality here?

}
