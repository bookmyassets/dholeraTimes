import { client } from "./client";
import { NextResponse } from "next/server";

// Fetch all blog posts
/* Projects */
export async function getPosts() {
  const query = `*[_type == "post" && "Project" in categories[]->title && author-> name == "Dholera Times" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title, _id}
  }`;
  const posts = await client.fetch(query, {}, { cache: 'no-store' }); // Disables caching
  return posts;
}

export async function getProjects() {
  const query = `*[_type == "post" && "Project" in categories[]->title && !("Sold Out" in categories[]->title) && author->name == "Dholera Times"]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    description,
    author->{name, image},
    categories[]->{title, _id},
    "category": categories[0]->title // Get the first category for easy access
  }`;
  
  const posts = await client.fetch(query, {}, { cache: 'no-store' });
  return posts;
}
/* Blogs */
export async function getblogs() {
  const query = `*[_type == "post" && "Blog" in categories[]->title && author-> name == "Dholera Times" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title, _id}
  }`;
  const posts = await client.fetch(query, {}, { cache: 'no-store' }); // Disables caching
  return posts;
}

/* News */
export async function getNews() {
  const query = `*[_type == "post" && "News" in categories[]->title && author-> name == "Dholera Times" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title, _id}
  }`;
  const posts = await client.fetch(query, {}, { cache: 'no-store' }); // Disables caching
  return posts;
}

/* Updates */
export async function getUpdates() {
  const query = `*[_type == "post" && "Updates" in categories[]->title && author-> name == "Dholera Times" ]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title, _id}
  }`;
  const posts = await client.fetch(query, {}, { cache: 'no-store' }); // Disables caching
  return posts;
}

// Fetch a single blog post by slug (No Cache)
export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    metaTitle,
    metaDescription,
    "keywords": keywords[]->title,  // Added this line to fetch keywords
    slug,
    mainImage,
    publishedAt,
    _createdAt,
    body,
    author->{
      name,
      image
    },
    categories[]->{
      title,
      _id
    },
    readingTime  // Added this line if you're using it
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

/* Inventory & Brochure */
export async function Inventory() {
  const query = `*[_type == "post" && author->name == "Dholera Times" && "Project" in categories[]->title] | order(publishedAt desc) [0..9] {
        _id,
        title,
        publishedAt,
        mainImage,
        "pdfUrl": coalesce(pdfFile.asset->url, null),
        "category": coalesce(categories[]->title, []),
        "author": coalesce(author->name, "Unknown")
    }`;

    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    const json = await response.json();
    const posts = json.result || [];

    // Filter out posts with no pdfUrl
    const filteredPosts = posts.filter((post) => post.pdfUrl);
    return filteredPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function Brochure() {
  const query = `*[_type == "post" && author->name == "Dholera Times" && "Brochure" in categories[]->title] | order(publishedAt desc) [0..9] {
      _id,
      title,
      publishedAt,
      mainImage,
      "pdfUrl": coalesce(pdfFile.asset->url, null),
      "category": coalesce(categories[]->title, []),
      "author": coalesce(author->name, "Unknown")
  }`;

  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, { cache: "no-store" }); // ✅ Cache disabled
    const json = await response.json();
    const posts = json.result || [];

    // Filter out posts with no pdfUrl
    const filteredPosts = posts.filter((post) => post.pdfUrl);
    return filteredPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

/* EVENTS & WEBINAR */
export async function getEvents() {
  const query = `*[_type == "event" && author->name == "Dholera Times" && "Upcoming Events" in categories[]->title] | order(publishedAt desc) {
    _id,
    eventName,
    slug,
    mainImage,
    publishedAt,
    description,
    dateOfEvent,
    timeOfEvent,
    location,
    mapsLink,
    "eventMaterials": eventMaterials.asset->url,
    categories[]->{title, _id}
  }`;

  try {
    const events = await client.fetch(query, { slug }, { cache: 'no-store' });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getWebinar() {
  const query = `*[_type == "event" && author->name == "Dholera Times" && "Webinar" in categories[]->title] | order(publishedAt desc) {
    _id,
    eventName,
    slug,
    mainImage,
    publishedAt,
    description,
    dateOfEvent,
    timeOfEvent,
    location,
    mapsLink,
    "eventMaterials": eventMaterials.asset->url,
    categories[]->{title, _id}
  }`;

  try {
    const events = await client.fetch(query, { slug }, { cache: 'no-store' });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventBySlug(slug) {
  const query = `*[_type == "event" && slug.current == $slug][0]{
    _id,
    eventName,
    slug,
    mainImage,
    publishedAt,
    description,
    dateOfEvent,
    timeOfEvent,
    location,
    mapsLink,
    "eventMaterials": eventMaterials.asset->url,
    categories[]->{title, _id}
  }`;
  const post = await client.fetch(query, { slug }, { cache: 'no-store' });
  return post;
}
