/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { LinkProps } from '@material-ui/core/Link';

interface ILinkProps extends LinkProps {
    component?: any
    to?: string
}

export default (props: ILinkProps) => (
    <Link component={RouterLink} {...props} />
)