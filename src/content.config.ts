import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    // Usamos el nuevo loader de Astro para buscar los archivos Markdown
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    
    // Definimos el esquema estricto para el frontmatter
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transformamos los strings de fecha a objetos Date reales
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // Campos personalizados para Dentalísimo
        heroImage: z.string().optional(),
        
        // ¡El guardia de seguridad actualizado con la lista oficial!
        category: z.enum([
            "Odontología Infantil",
            "Ortodoncia y Ortopedia",
            "Diseño de Sonrisa",
            "Odontología Digital",
            "Limpieza y Blanqueamiento",
            "Cirugía e Implantología",
            "Endodoncia",
            "Cirugía Estética Facial",
            "Dentalísimo"
        ]).optional(),
    }),
});

export const collections = { blog };