import mongoose from 'mongoose';
import Bug from '../../src/models/Bug.js';

describe('Bug Model', () => {
  it('should default status to \"open\"', () => {
    const bug = new Bug({ title: 'Unit Test Bug' });
    expect(bug.status).toBe('open');
  });
});
