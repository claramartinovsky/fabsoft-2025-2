package br.univille.fabsoft_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
}
