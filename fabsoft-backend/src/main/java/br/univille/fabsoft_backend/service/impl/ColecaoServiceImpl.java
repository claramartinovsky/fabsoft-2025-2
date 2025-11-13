package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Colecao;
import br.univille.fabsoft_backend.repository.ColecaoRepository;
import br.univille.fabsoft_backend.service.ColecaoService;

@Service
public class ColecaoServiceImpl implements ColecaoService {

    @Autowired
    private ColecaoRepository repository;

    @Override
    public List<Colecao> getAll() {
        return repository.findAll();
    }

    @Override
    public Colecao save(Colecao colecao) {
        return repository.save(colecao);
    }

    @Override
    public Colecao update(long id, Colecao colecao) {
        var antiga = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Coleção não encontrada"));

        antiga.setUsuario(colecao.getUsuario());
        antiga.setJogos(colecao.getJogos());

        return repository.save(antiga);
    }

    @Override
    public Colecao delete(long id) {
        var antiga = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Coleção não encontrada"));
        repository.delete(antiga);
        return antiga;
    }

    @Override
    public List<Colecao> getByUsuario(long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }

    @Override
    public Colecao getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        
        return null;
    }
}
