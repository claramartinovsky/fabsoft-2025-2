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

    @Override
    public Jogo update(long id, Jogo jogo) throws Exception{
    
        var jogoAntigo = repository.findById(id).orElse(null);
        if (jogoAntigo == null) {
            throw new Exception("Jogo inexistente");
        }

     
        jogoAntigo.setNome(jogo.getNome());
        jogoAntigo.setDescricao(jogo.getDescricao());
        jogoAntigo.setDataLancamento(jogo.getDataLancamento());
        jogoAntigo.setCategoriaId(jogo.getCategoriaId());
        jogoAntigo.setPlataformaId(jogo.getPlataformaId());
        
      
        repository.save(jogoAntigo);

        return jogoAntigo;
    }

    @Override
    public Jogo delete(long id) throws Exception {
      
        var jogoAntigo = repository.findById(id).orElse(null);
        
      
        if (jogoAntigo == null) {
            throw new Exception("Jogo inexistente");
        }

     
        repository.delete(jogoAntigo);
        return jogoAntigo;
    }
}
