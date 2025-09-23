package br.univille.fabsoft_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.univille.fabsoft_backend.entity.Categoria;
import br.univille.fabsoft_backend.service.CategoriaService;

@RestController
@RequestMapping("/api/v1/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<Categoria>> getCategorias() {
        var listaCategorias = service.getAll();
        return new ResponseEntity<List<Categoria>>(listaCategorias, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Categoria> save(@RequestBody Categoria categoria) {
        if (categoria == null) {
            return ResponseEntity.badRequest().build();
        }
        if (categoria.getId() == 0) {
            categoria = service.save(categoria);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> update(@RequestBody Categoria categoria, @PathVariable long id) {
        if (id <= 0 || categoria == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            categoria = service.update(id, categoria);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Categoria> update(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        try {
            var categoria = service.delete(id);
            return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
