import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('https://api.example.com/business-spec');
        setBusinessSpec(response.data);
      } catch (err) {
        setError('Failed to load business specification.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <Spinner className="mx-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const { id, name, description, createdAt } = businessSpec!;

  return (
    <section className={clsx('p-6', 'bg-white', 'rounded-lg', 'shadow-md')}>
      <h2 className="text-xl font-bold mb-4" aria-label={`Business Specification Name: ${name}`}>
        {name}
      </h2>
      <div className="mb-3">
        <span className="font-medium">Description:</span> {description}
      </div>
      <p className="mt-6 text-gray-500" aria-label={`Created At: ${createdAt.toDateString()}`}>
        Created at: {createdAt.toDateString()}
      </p>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('https://api.example.com/business-spec');
        setBusinessSpec(response.data);
      } catch (err) {
        setError('Failed to load business specification.');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <Spinner className="mx-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  const { id, name, description, createdAt } = businessSpec!;

  return (
    <section className={clsx('p-6', 'bg-white', 'rounded-lg', 'shadow-md')}>
      <h2 className="text-xl font-bold mb-4" aria-label={`Business Specification Name: ${name}`}>
        {name}
      </h2>
      <div className="mb-3">
        <span className="font-medium">Description:</span> {description}
      </div>
      <p className="mt-6 text-gray-500" aria-label={`Created At: ${createdAt.toDateString()}`}>
        Created at: {createdAt.toDateString()}
      </p>
    </section>
  );
};

export default CreateBusinessSpecification;