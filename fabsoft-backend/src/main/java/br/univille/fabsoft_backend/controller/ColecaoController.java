package br.univille.fabsoft_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.fabsoft_backend.entity.Colecao;
import br.univille.fabsoft_backend.service.ColecaoService;

@RestController
@RequestMapping("/api/v1/colecoes")
public class ColecaoController {

    @Autowired
    private ColecaoService service;

    @GetMapping
    public ResponseEntity<List<Colecao>> getAll() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Colecao>> getByUsuario(@PathVariable long usuarioId) {
        var lista = service.getByUsuario(usuarioId);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Colecao> save(@RequestBody Colecao colecao) {
        if (colecao == null) return ResponseEntity.badRequest().build();
        try {
            var nova = service.save(colecao);
            return new ResponseEntity<>(nova, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Colecao> update(@PathVariable long id, @RequestBody Colecao colecao) {
        try {
            var atualizada = service.update(id, colecao);
            return new ResponseEntity<>(atualizada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Colecao> delete(@PathVariable long id) {
        try {
            var deletada = service.delete(id);
            return new ResponseEntity<>(deletada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
