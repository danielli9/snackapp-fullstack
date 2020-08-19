package com.daniel.snackapp;

import com.daniel.snackapp.entity.Snack;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class SnackUtil {

    public static void main(String[] args) {
        SnackUtil example = new SnackUtil();
        example.listAll();
    };

    public static void createDefaultSnack(String[] args) {

        //create session factory
        SessionFactory factory = new Configuration()
                                .configure("hibernate.cfg.xml")
                                .addAnnotatedClass(Snack.class)
                                .buildSessionFactory();

        //create session
        Session session = factory.getCurrentSession();

        try{
            //create snack object
            System.out.println("Creating new snack...");
            Snack tempSnack = new Snack();

            tempSnack.setName("TEST DATASOURCE");
            tempSnack.setCalories(10f);
            tempSnack.setFat(10f);
            tempSnack.setCarbs(10f);
            tempSnack.setProtein(10f);

            //start transaction
            session.beginTransaction();

            //save snack object
            session.save(tempSnack);

            //commit transaction
            session.getTransaction().commit();
            System.out.println("Done!");

        }
        finally{
            factory.close();
        }
    };

    public static List<Snack> listAll() {
        //create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Snack.class)
                .buildSessionFactory();

        //create session
        Session session = factory.getCurrentSession();

        try{
            Transaction tx = session.beginTransaction();
            List<Snack> snacks = session.createQuery("FROM Snack s").list();
            return snacks;
        }
        finally{
            factory.close();
        }
    };

    public static void deleteById(Integer Id) {
        //create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Snack.class)
                .buildSessionFactory();

        //create session
        Session session = factory.getCurrentSession();
        Transaction tx = null;

        try{
            tx = session.beginTransaction();
//            Snack snack = session.get(Snack.class, Id);
            session.delete(session.get(Snack.class, Id));
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally{
            factory.close();
        }
    };

    public static void updateSnack(Integer Id, Snack snack){
        //create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Snack.class)
                .buildSessionFactory();

        //create session
        Session session = factory.getCurrentSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();

            System.out.println("ClassLoader : " + Snack.class.getClassLoader());
            System.out.println(session.getClass().getClassLoader()); //Hibernate Session object

            Snack snack1 = (Snack)session.get(Snack.class, Id);

            snack1.setName(snack.getName());
            snack1.setCalories(snack.getCalories());
            snack1.setFat(snack.getFat());
            snack1.setCarbs(snack.getCarbs());
            snack1.setProtein(snack.getProtein());

            session.update(snack1);
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    };

    public static void addSnack(Snack snack){
        //create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Snack.class)
                .buildSessionFactory();

        //create session
        Session session = factory.getCurrentSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            System.out.println(snack.getName());
            session.save(snack);
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }


}
