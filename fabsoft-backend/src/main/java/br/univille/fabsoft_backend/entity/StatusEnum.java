package br.univille.fabsoft_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public enum StatusEnum {
     ATIVO,
    INATIVO,
    PENDENTE
}
