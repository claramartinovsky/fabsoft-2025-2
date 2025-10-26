package br.univille.fabsoft_backend.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.fabsoft_backend.entity.Usuario;
import br.univille.fabsoft_backend.repository.UsuarioRepository;
import br.univille.fabsoft_backend.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public List<Usuario> getAll() {
        return repository.findAll();
    }

    @Override
    public Usuario save(Usuario usuario) {
        return repository.save(usuario);
    }

    @Override
    public Usuario update(long id, Usuario usuario) throws Exception {
        var usuarioAntigo = repository.findById(id).orElse(null);
        if (usuarioAntigo == null) {
            throw new Exception("Usuário inexistente");
        }

        usuarioAntigo.setNome(usuario.getNome());
        usuarioAntigo.setEmail(usuario.getEmail());
        usuarioAntigo.setSenha(usuario.getSenha());
        usuarioAntigo.setDataNascimento(usuario.getDataNascimento());

        return repository.save(usuarioAntigo);
    }

    @Override
    public Usuario delete(long id) throws Exception {
        var usuarioAntigo = repository.findById(id).orElse(null);
        if (usuarioAntigo == null) {
            throw new Exception("Usuário inexistente");
        }

        repository.delete(usuarioAntigo);
        return usuarioAntigo;
    }

    @Override
    public Usuario getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        
        return null;
    }
}
