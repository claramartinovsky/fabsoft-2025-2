package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Categoria;
import br.univille.fabsoft_backend.repository.CategoriaRepository;
import br.univille.fabsoft_backend.service.CategoriaService;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    @Override
    public List<Categoria> getAll() {
        return repository.findAll();
    }

    @Override
    public Categoria save(Categoria categoria) {
        return repository.save(categoria);
    }

    @Override
    public Categoria update(long id, Categoria categoria) throws Exception {
        var categoriaAntiga = repository.findById(id).orElse(null);
        if (categoriaAntiga == null) {
            throw new Exception("Categoria inexistente");
        }

        categoriaAntiga.setNome(categoria.getNome());

        repository.save(categoriaAntiga);
        return categoriaAntiga;
    }

    @Override
    public Categoria delete(long id) throws Exception {
        var categoriaAntiga = repository.findById(id).orElse(null);
        if (categoriaAntiga == null) {
            throw new Exception("Categoria inexistente");
        }

        repository.delete(categoriaAntiga);
        return categoriaAntiga;
    }

    @Override
    public Categoria getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        
        return null;
    }
}
