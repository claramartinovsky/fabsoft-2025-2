package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Plataforma;
import br.univille.fabsoft_backend.repository.PlataformaRepository;
import br.univille.fabsoft_backend.service.PlataformaService;

@Service
public class PlataformaServiceImpl implements PlataformaService {

    @Autowired
    private PlataformaRepository repository;

    @Override
    public List<Plataforma> getAll() {
        return repository.findAll();
    }

    @Override
    public Plataforma save(Plataforma plataforma) {
        return repository.save(plataforma);
    }

    @Override
    public Plataforma update(long id, Plataforma plataforma) throws Exception {
        var plataformaAntiga = repository.findById(id).orElse(null);
        if (plataformaAntiga == null) {
            throw new Exception("Plataforma inexistente");
        }

        plataformaAntiga.setNome(plataforma.getNome());

        repository.save(plataformaAntiga);
        return plataformaAntiga;
    }

    @Override
    public Plataforma delete(long id) throws Exception {
        var plataformaAntiga = repository.findById(id).orElse(null);
        if (plataformaAntiga == null) {
            throw new Exception("Plataforma inexistente");
        }

        repository.delete(plataformaAntiga);
        return plataformaAntiga;
    }
}
