package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Jogo;
import br.univille.fabsoft_backend.repository.JogoRepository;
import br.univille.fabsoft_backend.service.JogoService;

@Service
public class JogoServiceImpl implements JogoService {

    @Autowired
    private JogoRepository repository;

    @Override
    public List<Jogo> getAll() {
        return repository.findAll();
    }

    @Override
    public Jogo save(Jogo jogo) {
        return repository.save(jogo);
    }

}
