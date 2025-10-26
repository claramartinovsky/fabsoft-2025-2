package br.univille.fabsoft_backend.service;

import java.util.List;
import br.univille.fabsoft_backend.entity.Usuario;

public interface UsuarioService {
    List<Usuario> getAll();
    Usuario save(Usuario usuario);
    Usuario update(long id, Usuario usuario) throws Exception;
    Usuario delete(long id) throws Exception;
    Usuario getById(long id);
}
