package com.daniel.snackapp;

import com.daniel.snackapp.entity.Snack;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SnackService {
    public static List<Snack> findAll() {
        return SnackUtil.listAll();
    }

    public static void deleteById(Integer id) {
        SnackUtil.deleteById(id);
    }

    public static void updateSnack(Integer Id, Snack snack) {
        SnackUtil.updateSnack(Id, snack);
    }

    public static void addSnack(Snack snack) {
        SnackUtil.addSnack(snack);
    }
}
