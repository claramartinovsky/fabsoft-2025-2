package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Categoria;
import br.univille.fabsoft_backend.entity.Jogo;
import br.univille.fabsoft_backend.entity.Plataforma;
import br.univille.fabsoft_backend.repository.CategoriaRepository;
import br.univille.fabsoft_backend.repository.JogoRepository;
import br.univille.fabsoft_backend.repository.PlataformaRepository;
import br.univille.fabsoft_backend.service.JogoService;

@Service
public class JogoServiceImpl implements JogoService {

    @Autowired
    private JogoRepository repository;
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private PlataformaRepository plataformaRepository;

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
        
         if (jogo.getCategorias() != null && !jogo.getCategorias().isEmpty()) {
        List<Categoria> categorias = categoriaRepository.findAllById(
            jogo.getCategorias().stream().map(Categoria::getId).toList()
        );
        jogoAntigo.setCategorias(categorias);
    }

      if (jogo.getPlataformas() != null && !jogo.getPlataformas().isEmpty()) {
        List<Plataforma> plataformas = plataformaRepository.findAllById(
            jogo.getPlataformas().stream().map(Plataforma::getId).toList()
        );
        jogoAntigo.setPlataformas(plataformas);
    }
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

    @Override
    public Jogo getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        
        return null;
    }

}
