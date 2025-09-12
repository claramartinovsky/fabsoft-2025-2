package br.univille.fabsoft_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.API_Integracao;

public interface ApiIntegracaoRepository extends JpaRepository<API_Integracao, Long> {
}
