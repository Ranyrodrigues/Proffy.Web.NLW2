import Knex from 'knex';

export async function up(Knex:Knex){
    return Knex.schema.createTable('connections', table =>{
        table.increments ('id').primary();


        table.integer('users_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(Knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
        
    });
}
export async function down(Knex:Knex){
    return Knex.schema.dropTable('connections');
}