import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Project {
  client: string;
  description: string;
  tags: string[];
  image: string;
  bgColor: string;
  layout: 'left' | 'right';
}

export interface Testimonial {
  text: string;
  name: string;
  company: string;
  avatar: string;
}

export interface Article {
  title: string;
  description: string;
  image: string;
  color: string;
}