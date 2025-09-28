package br.univille.fabsoft_backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Resenha;
import br.univille.fabsoft_backend.entity.Usuario;
import br.univille.fabsoft_backend.entity.Jogo;
import br.univille.fabsoft_backend.repository.ResenhaRepository;
import br.univille.fabsoft_backend.repository.UsuarioRepository;
import br.univille.fabsoft_backend.repository.JogoRepository;
import br.univille.fabsoft_backend.service.ResenhaService;

@Service
public class ResenhaServiceImpl implements ResenhaService {

    @Autowired
    private ResenhaRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JogoRepository jogoRepository;

    @Override
    public List<Resenha> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Resenha> getByUsuario(long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }

    @Override
    public List<Resenha> getByJogo(long jogoId) {
        return repository.findByJogoId(jogoId);
    }
    @Override
    public Resenha save(Resenha resenha) throws Exception {
      
        Usuario usuario = usuarioRepository.findById(resenha.getUsuario().getId())
            .orElseThrow(() -> new Exception("Usuário inexistente"));

       
        Jogo jogo = jogoRepository.findById(resenha.getJogo().getId())
            .orElseThrow(() -> new Exception("Jogo inexistente"));

        resenha.setUsuario(usuario);
        resenha.setJogo(jogo);

        return repository.save(resenha);
    }

    @Override
    public Resenha update(long id, Resenha resenha) throws Exception {
        var resenhaAntiga = repository.findById(id).orElse(null);
        if (resenhaAntiga == null) {
            throw new Exception("Resenha inexistente");
        }

        resenhaAntiga.setConteudo(resenha.getConteudo());

        if (resenha.getUsuario() != null && resenha.getUsuario().getId() > 0) {
            Usuario usuario = usuarioRepository.findById(resenha.getUsuario().getId())
                .orElseThrow(() -> new Exception("Usuário inexistente"));
            resenhaAntiga.setUsuario(usuario);
        }

        if (resenha.getJogo() != null && resenha.getJogo().getId() > 0) {
            Jogo jogo = jogoRepository.findById(resenha.getJogo().getId())
                .orElseThrow(() -> new Exception("Jogo inexistente"));
            resenhaAntiga.setJogo(jogo);
        }

        return repository.save(resenhaAntiga);
    }

    @Override
    public Resenha delete(long id) throws Exception {
        var resenhaAntiga = repository.findById(id).orElse(null);

        if (resenhaAntiga == null) {
            throw new Exception("Resenha inexistente");
        }

        repository.delete(resenhaAntiga);
        return resenhaAntiga;
    }
}

