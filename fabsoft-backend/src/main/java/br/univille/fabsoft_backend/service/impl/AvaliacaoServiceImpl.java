package br.univille.fabsoft_backend.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Avaliacao;
import br.univille.fabsoft_backend.entity.Usuario;
import br.univille.fabsoft_backend.entity.Jogo;
import br.univille.fabsoft_backend.repository.AvaliacaoRepository;
import br.univille.fabsoft_backend.repository.UsuarioRepository;
import br.univille.fabsoft_backend.repository.JogoRepository;
import br.univille.fabsoft_backend.service.AvaliacaoService;

@Service
public class AvaliacaoServiceImpl implements AvaliacaoService {

    @Autowired
    private AvaliacaoRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JogoRepository jogoRepository;

    @Override
    public List<Avaliacao> getAll() {
        return repository.findAll();
    }

    @Override
    public Avaliacao save(Avaliacao avaliacao) {
        if (avaliacao.getNota() < 0 || avaliacao.getNota() > 5) {
            throw new IllegalArgumentException("A nota deve ser entre 0 e 5");
        }

        Usuario usuario = usuarioRepository.findById(avaliacao.getUsuario().getId())
                .orElseThrow(() -> new RuntimeException("Usuário inexistente"));

        Jogo jogo = jogoRepository.findById(avaliacao.getJogo().getId())
                .orElseThrow(() -> new RuntimeException("Jogo inexistente"));

        avaliacao.setUsuario(usuario);
        avaliacao.setJogo(jogo);

        return repository.save(avaliacao);
    }

    @Override
    public Avaliacao update(long id, Avaliacao avaliacao) {
        var antiga = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação inexistente"));

        if (avaliacao.getNota() < 0 || avaliacao.getNota() > 5) {
            throw new IllegalArgumentException("A nota deve ser entre 0 e 5");
        }

        antiga.setNota(avaliacao.getNota());

        if (avaliacao.getUsuario() != null && avaliacao.getUsuario().getId() > 0) {
            Usuario usuario = usuarioRepository.findById(avaliacao.getUsuario().getId())
                    .orElseThrow(() -> new RuntimeException("Usuário inexistente"));
            antiga.setUsuario(usuario);
        }

        if (avaliacao.getJogo() != null && avaliacao.getJogo().getId() > 0) {
            Jogo jogo = jogoRepository.findById(avaliacao.getJogo().getId())
                    .orElseThrow(() -> new RuntimeException("Jogo inexistente"));
            antiga.setJogo(jogo);
        }

        return repository.save(antiga);
    }

    @Override
    public Avaliacao delete(long id) {
        var antiga = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação inexistente"));
        repository.delete(antiga);
        return antiga;
    }

    @Override
    public List<Avaliacao> getByUsuario(long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }

    @Override
    public List<Avaliacao> getByJogo(long jogoId) {
        return repository.findByJogoId(jogoId);
    }

    @Override
    public Avaliacao getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        
        return null;
    }    
}
