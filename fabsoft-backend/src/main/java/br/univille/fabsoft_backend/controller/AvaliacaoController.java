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

import br.univille.fabsoft_backend.entity.Avaliacao;
import br.univille.fabsoft_backend.service.AvaliacaoService;

@RestController
@RequestMapping("/api/v1/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService service;

    @GetMapping
    public ResponseEntity<List<Avaliacao>> getAvaliacoes() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Avaliacao>> getByUsuario(@PathVariable long usuarioId) {
        var lista = service.getByUsuario(usuarioId);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @GetMapping("/jogo/{jogoId}")
    public ResponseEntity<List<Avaliacao>> getByJogo(@PathVariable long jogoId) {
        var lista = service.getByJogo(jogoId);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Avaliacao> save(@RequestBody Avaliacao avaliacao) {
        if (avaliacao == null) {
            return ResponseEntity.badRequest().build();
        }
        if (avaliacao.getId() == 0) {
            try {
                var nova = service.save(avaliacao);
                return new ResponseEntity<>(nova, HttpStatus.CREATED);
            } catch (Exception e) {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{id}")	
    public ResponseEntity<Avaliacao> getAvaliacaoId(@PathVariable Long id){
        var avaliacao = service.getById(id);

        return new ResponseEntity<Avaliacao>(avaliacao, HttpStatus.OK);
    } 

    @PutMapping("/{id}")
    public ResponseEntity<Avaliacao> update(@PathVariable long id, @RequestBody Avaliacao avaliacao) {
        try {
            var atualizada = service.update(id, avaliacao);
            return new ResponseEntity<>(atualizada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Avaliacao> delete(@PathVariable long id) {
        try {
            var deletada = service.delete(id);
            return new ResponseEntity<>(deletada, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
