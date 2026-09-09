# Los 4 Fantásticos

Página estática de presentación del equipo de estudiantes.

## Desplegar en EasyPanel

1. Creá una aplicación desde el repositorio de GitHub.
2. Elegí el método de build **Dockerfile**.
3. Usá el puerto interno `80`.
4. Agregá el dominio y activá HTTPS desde la sección de dominios.
5. Desplegá la aplicación.

El `Dockerfile` usa Nginx para servir los archivos estáticos y la configuración incluye fallback hacia `index.html`.

## Probar localmente

```bash
docker build -t los-cuatro-fantasticos .
docker run --rm -p 8080:80 los-cuatro-fantasticos
```

Abrí `http://localhost:8080`.