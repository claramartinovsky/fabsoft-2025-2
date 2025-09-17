package br.univille.fabsoft_backend.service;

import java.util.List;

import br.univille.fabsoft_backend.entity.Jogo;

public interface JogoService {
    List<Jogo> getAll();
    Jogo save(Jogo jogo);
    Jogo update(long id, Jogo jogo);
}
