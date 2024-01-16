"""empty message

Revision ID: 4e68178a5ad8
Revises: 0e568e1400dc
Create Date: 2023-10-21 12:42:22.656570

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4e68178a5ad8'
down_revision = '0e568e1400dc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('first_name', sa.String(length=150), nullable=True),
    sa.Column('last_name', sa.String(length=150), nullable=True),
    sa.Column('email', sa.String(length=150), nullable=False),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('g_auth_verify', sa.Boolean(), nullable=True),
    sa.Column('token', sa.String(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    op.create_table('whiskey',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('name', sa.String(length=300), nullable=False),
    sa.Column('category', sa.String(length=200), nullable=True),
    sa.Column('distillery', sa.String(length=200), nullable=True),
    sa.Column('bottler', sa.String(length=200), nullable=True),
    sa.Column('bottling_series', sa.String(length=200), nullable=True),
    sa.Column('year_bottled', sa.String(length=200), nullable=True),
    sa.Column('strength', sa.String(length=200), nullable=True),
    sa.Column('size', sa.String(length=200), nullable=True),
    sa.Column('notes', sa.String(length=300), nullable=True),
    sa.Column('user_token', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['user_token'], ['user.token'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('whiskey')
    op.drop_table('user')
    # ### end Alembic commands ###
