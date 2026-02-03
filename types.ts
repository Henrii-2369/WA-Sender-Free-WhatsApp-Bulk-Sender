import React from 'react';

export interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface StatItem {
    id: number;
    value: string;
    label: string;
}

export interface StepItem {
    id: number;
    title: string;
    description: string;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}