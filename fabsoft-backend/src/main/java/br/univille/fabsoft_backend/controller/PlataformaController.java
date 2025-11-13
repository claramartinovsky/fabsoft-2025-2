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

import br.univille.fabsoft_backend.entity.Plataforma;
import br.univille.fabsoft_backend.service.PlataformaService;

@RestController
@RequestMapping("/api/v1/plataformas")
public class PlataformaController {

    @Autowired
    private PlataformaService service;

    @GetMapping
    public ResponseEntity<List<Plataforma>> getPlataformas() {
        var listaPlataformas = service.getAll();
        return new ResponseEntity<List<Plataforma>>(listaPlataformas, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Plataforma> save(@RequestBody Plataforma plataforma) {
        if (plataforma == null) {
            return ResponseEntity.badRequest().build();
        }
        if (plataforma.getId() == 0) {
            plataforma = service.save(plataforma);
            return new ResponseEntity<Plataforma>(plataforma, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plataforma> update(@RequestBody Plataforma plataforma, @PathVariable long id) {
        if (id <= 0 || plataforma == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            plataforma = service.update(id, plataforma);
            return new ResponseEntity<Plataforma>(plataforma, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")	
    public ResponseEntity<Plataforma> getPlataformaId(@PathVariable Long id){
        var plataforma = service.getById(id);

        return new ResponseEntity<Plataforma>(plataforma, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Plataforma> update(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        try {
            var plataforma = service.delete(id);
            return new ResponseEntity<Plataforma>(plataforma, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
