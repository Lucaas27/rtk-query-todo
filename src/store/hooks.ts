/* This file serves as a central hub for re-exporting pre-typed Redux hooks.
 These imports are restricted elsewhere to ensure consistent
 usage of typed hooks throughout the application.
 I disable the ESLint rule here because this is the designated place
 for importing and re-exporting the typed versions of hooks. */

/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// Type predicate to narrow an unknown error to `FetchBaseQueryError`
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

// Type predicate to narrow an unknown error to an object with a string 'message' property
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof error.message === 'string'
  );
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
