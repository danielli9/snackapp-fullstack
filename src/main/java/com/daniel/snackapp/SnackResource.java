package com.daniel.snackapp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.daniel.snackapp.entity.Snack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8080" })


@RestController
public class SnackResource {
    @Autowired SnackService snackService;

    @GetMapping("/snacks")
    public List<Snack> getAllSnacks() {
        return snackService.findAll();
    }

    @DeleteMapping("/snacks/{id}")
    public void deleteCourse(@PathVariable Integer id) {
        snackService.deleteById(id);
    }

    @PutMapping("/snacks/{id}")
    public void updateSnack(@PathVariable Integer id,
                                               @RequestBody Snack snack) {
        snackService.updateSnack(id, snack);
    }

    @PostMapping("/snacks")
    public void addSnack(@RequestBody Snack snack) {
        snackService.addSnack(snack);
    }

}
