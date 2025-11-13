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

import br.univille.fabsoft_backend.entity.Resenha;
import br.univille.fabsoft_backend.service.ResenhaService;

@RestController
@RequestMapping("/api/v1/resenhas")
public class ResenhaController {

    @Autowired
    private ResenhaService service;

    @GetMapping
    public ResponseEntity<List<Resenha>> getResenhas() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Resenha>> getByUsuario(@PathVariable long usuarioId) {
        var lista = service.getByUsuario(usuarioId);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/jogo/{jogoId}")
    public ResponseEntity<List<Resenha>> getByJogo(@PathVariable long jogoId) {
        var lista = service.getByJogo(jogoId);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Resenha> save(@RequestBody Resenha resenha) {
        if (resenha == null) {
        return ResponseEntity.badRequest().build();
    }
        if (resenha.getId() == 0) {
        try {
            var nova = service.save(resenha);
            return new ResponseEntity<>(nova, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    return ResponseEntity.badRequest().build();
}

    @PutMapping("/{id}")
    public ResponseEntity<Resenha> update(@PathVariable long id, @RequestBody Resenha resenha) {
        try {
            var atualizada = service.update(id, resenha);
            return new ResponseEntity<>(atualizada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")	
    public ResponseEntity<Resenha> getResenhaId(@PathVariable Long id){
        var resenha = service.getById(id);

        return new ResponseEntity<Resenha>(resenha, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Resenha> delete(@PathVariable long id) {
        try {
            var deletada = service.delete(id);
            return new ResponseEntity<>(deletada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

