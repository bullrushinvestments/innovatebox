import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { ContentCategory } from './types'; // Assume this is an enum or interface for content categories

const GatherRequirements: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const onFinish = (values: any) => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Received values of form:', values);
            setLoading(false);
        }, 2000);
    };

    const validateForm = (errors: Record<string, string>) => {
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="gather-requirements">
            <h1>Gather Requirements</h1>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        { required: true, message: 'Please input the title of your content!' },
                    ]}
                    validateStatus={errors.title ? 'error' : undefined}
                    help={errors.title || null}
                >
                    <Input placeholder="Enter title" aria-label="content-title-input" />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                    validateStatus={errors.category ? 'error' : undefined}
                    help={errors.category || null}
                >
                    <Select placeholder="Select a category" aria-label="content-category-select">
                        {Object.values(ContentCategory).map((category) => (
                            <Select.Option key={category} value={category}>
                                {category}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {/* Add more form fields as necessary */}
                <Button type="primary" htmlType="submit" loading={loading} aria-label="submit-requirements-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { ContentCategory } from './types'; // Assume this is an enum or interface for content categories

const GatherRequirements: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const onFinish = (values: any) => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Received values of form:', values);
            setLoading(false);
        }, 2000);
    };

    const validateForm = (errors: Record<string, string>) => {
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="gather-requirements">
            <h1>Gather Requirements</h1>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        { required: true, message: 'Please input the title of your content!' },
                    ]}
                    validateStatus={errors.title ? 'error' : undefined}
                    help={errors.title || null}
                >
                    <Input placeholder="Enter title" aria-label="content-title-input" />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                    validateStatus={errors.category ? 'error' : undefined}
                    help={errors.category || null}
                >
                    <Select placeholder="Select a category" aria-label="content-category-select">
                        {Object.values(ContentCategory).map((category) => (
                            <Select.Option key={category} value={category}>
                                {category}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {/* Add more form fields as necessary */}
                <Button type="primary" htmlType="submit" loading={loading} aria-label="submit-requirements-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default GatherRequirements;