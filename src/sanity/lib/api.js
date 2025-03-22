import { client } from "./client";
import { NextResponse } from "next/server";

// Fetch all blog posts
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
  const posts = await client.fetch(query);
  return posts;
}

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
  const posts = await client.fetch(query);
  return posts;
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image
    },
    categories[]->{
      title,
      _id
    }
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

export async function Inventory() {
  const query = `*[_type == "post" && author->name == "Dholera Times" && "Project" in categories[]->title] | order(publishedAt desc) [0..9] {
      _id,
      title,
      publishedAt,
      "pdfUrl": coalesce(pdfFile.asset->url, null),
      "category": coalesce(categories[]->title, []),
      "author": coalesce(author->name, "Unknown")
  }`;

  try {
      const posts = await client.fetch(query);
      // Filter out posts with no pdfUrl
      const filteredPosts = posts.filter(post => post.pdfUrl); 
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
      "pdfUrl": coalesce(pdfFile.asset->url, null),
      "category": coalesce(categories[]->title, []),
      "author": coalesce(author->name, "Unknown")
  }`;

  try {
      const posts = await client.fetch(query);
      return posts;
  } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
  }
}

// Function to get all events
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
    const events = await client.fetch(query);
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
    const events = await client.fetch(query);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

// Function to get a single event by slug
/* export async function getEventBySlug(slug) {
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
  
  try {
    const event = await client.fetch(query, { slug });
    return event;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
} */

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
  const post = await client.fetch(query, { slug });
  return post;
}