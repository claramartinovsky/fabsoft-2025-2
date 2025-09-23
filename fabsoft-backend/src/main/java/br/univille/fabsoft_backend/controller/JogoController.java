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

import br.univille.fabsoft_backend.entity.Jogo;
import br.univille.fabsoft_backend.service.JogoService;

@RestController
@RequestMapping("/api/v1/jogos")
public class JogoController {

    @Autowired
    private JogoService service;

    @GetMapping
    public ResponseEntity<List<Jogo>> getJogos() {
        var listaJogos = service.getAll();
        return new ResponseEntity<List<Jogo>>(listaJogos, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Jogo> save(@RequestBody Jogo jogo){
        if(jogo == null){
            return ResponseEntity.badRequest().build();
        }
        if(jogo.getId() == 0){
            jogo = service.save(jogo);
            return new ResponseEntity<Jogo>(jogo,HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Jogo> 
        update(@RequestBody Jogo jogo,
            @PathVariable long id){

        if(id <= 0 || jogo == null){
            return ResponseEntity.badRequest().build();
        }

        try {jogo = service.update(id, jogo);
           return new ResponseEntity<Jogo>(jogo, HttpStatus.OK); 
        }  catch (Exception e) {return ResponseEntity.notFound().build();
        }
            
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<Jogo> 
        update(@PathVariable long id){

        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }

        try {
            var jogo = service.delete(id);
            return new ResponseEntity<Jogo>(jogo,HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }


    }
}
